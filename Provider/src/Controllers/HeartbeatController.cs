using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Provider.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class HeartbeatController : ControllerBase
    {
        public IActionResult Get()
        {
            return Ok("API is responding");
        }
    }
}
