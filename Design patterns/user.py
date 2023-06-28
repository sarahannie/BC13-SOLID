#Variable injection/dependency injection
    #parameterixed constructer
    #setters and getters


class User():
    def __init__(self, username:str = None, password:str = None):
        #data
        self.username =  username
        self.password = password

    def set_username(self, username:str):
        self.username = username

    def set_password(self, password:str):
        self.username = password

    def get_username(self):
        return self.username
    
    def get_password(self):
        return self.password


user = User('senjack', 'pwd')

print(user.get_username(), user.get_password())

user.set_username('Florence')
user.set_password('Flo')

print(user.get_username(), user.get_password())