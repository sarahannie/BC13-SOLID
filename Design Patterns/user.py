# Variable Injection & Dependancy Injection
    # Parameterized constructor
    # Setters and Getter


# Class
class User():

    def __init__(self, username:str, password:str):
        # Data
        self.username = username
        self.password = password
    
    def set_username(self, username:str):
        self.username = username
    
    def set_password(self, password:str):
        self.password = password

    def get_username(self):
        return self.username
    
    def get_password(self):
        return self.password


# Objects
user = User("senjack", "pawd")

print(user.get_username(), user.get_password())

user.set_username("Florence")
user.set_password("Password")

print(user.get_username(), user.get_password())