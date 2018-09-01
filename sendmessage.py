import requests, json
ACCESS_TOKEN = "kIq31WcoZftFtqrh4r1a8jb3t0WcJ8pacLkXrvFawAGEUt8U3hEEwRxJlgAMgCCKnHL8x5vMvo8W+NkIuoUdHJ7pB7hupj2Oe501YfwMYvxXFd9jtrid8PhY9hS6NfHep3gXkpIXMBJ/I/NqfsAwYQdB04t89/1O/w1cDnyilFU="

def Sendmessage():
    url = 'https://api.line.me/v2/bot/message/push'
    data = {
        "to": "lvzhongyi",
        "messages": [
            {
                "type": "text",
                "text": "Hello, user!"
            }
        ]
    }
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + ACCESS_TOKEN
    }
    requests.post(url, data=json.dumps(data), headers=headers)

if __name__ == '__main__':
    Sendmessage()