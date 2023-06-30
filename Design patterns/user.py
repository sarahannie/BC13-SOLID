"""Singleton Design Pattern"""

# Class
class User():
    """class to demonstrate singleton pattern"""
    __instance = None

    @staticmethod
    def login(cred):
        """get the current instance of the class"""
        if User.__instance is None:
            return User(cred.username, cred.password)
            #return User(cred.__instance.username, cred.__instance.password)
        return User.__instance

    def __init__(self, username: str, password: str):
        """ User class demonstrating Singleton Pattern"""
        if User.__instance is None:
            self.username = username
            self.password = password
            User.__instance = self
        #else:
            #raise Exception("User logged in")
    
    @staticmethod   
    def logout():
        """log out/ end session for current instance"""
        User.__instance = None
        
    def set_username(self, username: str):
        """set username"""
        self.username = username

    def set_password(self, password: str):
        """set the password"""
        self.password = password

    def get_username(self):
        """return the username"""
        return User.__instance.username # updated the getter for username

    def get_password(self):
        """ return the password"""
        return User.__instance.password # updated the getter for password

# Objects
user_1 = User("Pauline", "pkt")
print(user_1.get_username(), user_1.get_password())
user_1.logout()

user_2 = User("Oliver", "pasd")
print(user_2.get_username(), user_2.get_password())
# user_2.logout()

user_3 = User("Izo", "pwd")
print(user_3.get_username(), user_3.get_password())
# user_3.logout()

user_3 = User("Demma", "123")
print(user_3.get_username(), user_3.get_password())
# user_3.logout()
