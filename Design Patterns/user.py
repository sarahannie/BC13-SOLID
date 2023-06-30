# Variable Injection & Dependancy Injection
    # Parameterized constructor
    # Setters and Getter


# Class
class User():

    def __init__(self, username:str, password:str):
        # Data
        self.username = username
        self.password = password

    def login(self, credentials):
        pass

    def logout(self):
        pass

    def set_username(self, username:str):
        self.username = username
    
    def set_password(self, password:str):
        self.password = password

    def get_username(self):
        return self.username
    
    def get_password(self):
        return self.password


# Objects
user1 = User("Denis", "pawd1")
print(user1.get_username(), user1.get_password())

user2 = User("oliver", "pawd2")
print(user2.get_username(), user2.get_password())

user3 = User("Isaac", "pawd3")
print(user3.get_username(), user3.get_password())

user4 = User("diana", "pawd4")
print(user4.get_username(), user4.get_password())
