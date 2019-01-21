using Provider.WebApi.Models;

namespace Provider.WebApi.Services.Authentication
{
    public class UserService : IUserService
    {
        public User LogInUser(string username, string password)
        {
            if(username == "testuser" && password == "testpassword")
            {
                return new User
                {
                    FirstName = "Test",
                    LastName = "User",
                    UserName = "testuser",
                    Organization = "Test Organization"
                };
            }
            return null;
        }
    }
}
