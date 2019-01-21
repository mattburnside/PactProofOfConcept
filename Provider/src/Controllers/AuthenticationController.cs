using System.Net;
using Microsoft.AspNetCore.Mvc;
using Provider.WebApi.Models;
using Provider.WebApi.Services.Authentication;

namespace Provider.WebApi.Controllers
{
    [Route("api/authentication")]
    public class AuthenticationController : Controller
    {
        private readonly IUserService _userService;

        public AuthenticationController(IUserService userService)
        {
            this._userService = userService;
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Login([FromBody] LoginRequestModel model)
        {
            var user = _userService.LogInUser(model.Username, model.Password);
            if (user != null)
            {
                var responseModel = new LoginSucceededResponseModel
                {
                    Username = user.UserName
                };
                return Ok(responseModel);
            }
            Response.StatusCode = (int)HttpStatusCode.Unauthorized;
            return new ObjectResult(new LoginFailedResponseModel
            {
                ErrorMessage = "The username/password combination was not found."
            });
        }
    }
}