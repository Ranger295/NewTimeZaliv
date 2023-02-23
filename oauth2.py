import os
from flask import Flask, g, session, redirect, request, url_for, jsonify, render_template
from requests_oauthlib import OAuth2Session
from mcstatus import JavaServer
import threading
from time import sleep

mc_server_online = 0
host = '127.0.0.1:5000'

NECESSARY_GUILD_ID = '928641318962475070'

OAUTH2_CLIENT_ID = '1067138332217319557'
OAUTH2_CLIENT_SECRET = 'RJYEL_fwadxrg6USmdXrDFadRLy5sr1y'
OAUTH2_REDIRECT_URI = f'http://{host}/callback'

API_BASE_URL = os.environ.get('API_BASE_URL', 'https://discordapp.com/api')
AUTHORIZATION_BASE_URL = API_BASE_URL + '/oauth2/authorize'
TOKEN_URL = API_BASE_URL + '/oauth2/token'
app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = OAUTH2_CLIENT_SECRET

if 'http://' in OAUTH2_REDIRECT_URI:
    os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = 'true'

def server_status():
    global mc_server_online
    while True:
        server = JavaServer.lookup("65.109.88.93:25573")
        status = server.status()
        mc_server_online = status.players.online
        # print("Players online:", ", ".join([player.name for player in status.players.sample]))
        sleep(60)
thread = threading.Timer(1, server_status)
thread.start()


def token_updater(token):
    session['oauth2_token'] = token


def make_session(token=None, state=None, scope=None):
    return OAuth2Session(
        client_id=OAUTH2_CLIENT_ID,
        token=token,
        state=state,
        scope=scope,
        redirect_uri=OAUTH2_REDIRECT_URI,
        auto_refresh_kwargs={
            'client_id': OAUTH2_CLIENT_ID,
            'client_secret': OAUTH2_CLIENT_SECRET,
        },
        auto_refresh_url=TOKEN_URL,
        token_updater=token_updater)


def dyn_data():
    global mc_server_online
    try:
        name = session['user_name']
        avatar = f"https://cdn.discordapp.com/avatars/{session['user_id']}/{session['user_avatar']}"
        account = f"http://{host}/account"
    except:
        name = 'войти через дс'
        avatar = '/static/image/discordone.png'
        account = f'http://{host}/login'
    return [name, avatar, account, mc_server_online]


@app.route('/')
def index():
    dyn = dyn_data()
    name = dyn[0]
    avatar = dyn[1]
    account = dyn[2]
    players_online = dyn[3]
    return render_template('index.html', name=name, account=account, avatar=avatar, players_online=players_online, host=host)


@app.route('/rules')
def rules():
    dyn = dyn_data()
    name = dyn[0]
    avatar = dyn[1]
    account = dyn[2]
    players_online = dyn[3]
    return render_template('rules.html', name=name, account=account, avatar=avatar, players_online=players_online, host=host)


@app.route('/faq')
def faq():
    dyn = dyn_data()
    name = dyn[0]
    avatar = dyn[1]
    account = dyn[2]
    players_online = dyn[3]
    return render_template('faq.html', name=name, account=account, avatar=avatar, players_online=players_online, host=host)


@app.route('/meh')
def meh():
    dyn = dyn_data()
    name = dyn[0]
    avatar = dyn[1]
    account = dyn[2]
    players_online = dyn[3]
    return render_template('meh.html', name=name, account=account, avatar=avatar, players_online=players_online, host=host)


@app.route('/cities')
def cities():
    dyn = dyn_data()
    name = dyn[0]
    avatar = dyn[1]
    account = dyn[2]
    players_online = dyn[3]
    return render_template('cities.html', name=name, account=account, avatar=avatar, players_online=players_online, host=host)


@app.route('/account')
def account():
    return render_template('account.html', host=host)


@app.route('/login')
def login():
    scope = request.args.get(
        'scope',
        'identify email guilds')
    discord = make_session(scope=scope.split(' '))
    authorization_url, state = discord.authorization_url(AUTHORIZATION_BASE_URL)
    session['oauth2_state'] = state
    return redirect(authorization_url)

# https://cdn.discordapp.com/avatars/858289375048499250/d7165f3c2b83c129c7a444d9670ed9ed


@app.route('/callback')
def callback():
    global NECESSARY_GUILD_ID
    global host
    if request.values.get('error'):
        return redirect(f'http://{host}')
    discord = make_session(state=session.get('oauth2_state'))
    token = discord.fetch_token(
        TOKEN_URL,
        client_secret=OAUTH2_CLIENT_SECRET,
        authorization_response=request.url)
    session['oauth2_token'] = token
    # return redirect(url_for('.me'))
    discord = make_session(token=session.get('oauth2_token'))
    user = discord.get(API_BASE_URL + '/users/@me').json()
    guilds = discord.get(API_BASE_URL + '/users/@me/guilds').json()
    print(user, guilds)
    for guild in guilds:
        if guild['id'] == NECESSARY_GUILD_ID:
            guild_id = guild['id']
            guild_name = guild['name']
    session['user_id'] = user['id']
    session['user_name'] = user['username']
    session['user_email'] = user['email']
    session['user_avatar'] = user['avatar']
    print(guild_id, guild_name, session['user_id'], session['user_name'], session['user_email'], sep='\n')
    # auth.user_id = user['id']
    # auth.user_name = user['username']
    # auth.user_email = user['email']
    # print(guild_id, guild_name, auth.user_id, auth.user_name, auth.user_email, sep='\n')
    return redirect(f'http://{host}')


# @app.route('/me')
# def me():
#     discord = make_session(token=session.get('oauth2_token'))
#     user = discord.get(API_BASE_URL + '/users/@me').json()
#     guilds = discord.get(API_BASE_URL + '/users/@me/guilds').json()
#     print(user, guilds)
#     return (jsonify(user=user, guilds=guilds))


if __name__ == '__main__':
    app.run()