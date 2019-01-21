using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace Consumer.ConsoleApp
{
    public static class ConsumerApiClient
    {
        public static async Task<HttpResponseMessage> ValidateDateTimeUsingProviderApi(string dateTimeToValidate, string baseUri)
        {
            using (var client = new HttpClient { BaseAddress = new Uri(baseUri)})
            {
                try
                {
                    var response = await client.GetAsync($"/api/provider?validDateTime={dateTimeToValidate}");
                    return response;
                }
                catch (System.Exception ex)
                {
                    throw new Exception("There was a problem connecting to Provider API.", ex);
                }
            }
        }

        public static async Task<HttpResponseMessage> Heartbeat(string baseUri)
        {
            using (var client = new HttpClient { BaseAddress = new Uri(baseUri)})
            {
                try
                {
                    var response = await client.GetAsync($"/api/heartbeat");
                    return response;
                }
                catch (System.Exception ex)
                {
                    throw new Exception("There was a problem connecting to Provider API.", ex);
                }
            }
        }

        public static async Task<HttpResponseMessage> LogInUser(string userName, string password, string baseUri)
        {
            var request = new
            {
                username = userName,
                password = password
            };
            using (var client = new HttpClient { BaseAddress = new Uri(baseUri)})
            {
                try
                {
                    var response = await client.PostAsync($"/api/authentication/login", new JsonContent(request));
                    return response;
                }
                catch (System.Exception ex)
                {
                    throw new Exception("There was a problem connecting to Provider API.", ex);
                }
            }
        }
    }
}