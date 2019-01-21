using Provider.WebApi.Models;

namespace Provider.WebApi.Services.Authentication
{
    public interface IUserService
    {
        User LogInUser(string username, string password);
    }
}
