using System;
using Xunit;
using PactNet.Mocks.MockHttpService;
using PactNet.Mocks.MockHttpService.Models;
using System.Collections.Generic;
using Consumer.ConsoleApp;
using PactNet.Matchers;
using PactNet.Matchers.Regex;
using PactNet.Matchers.Type;

namespace Consumer.ConsoleApp.Tests
{
    public class ConsumerPactTests : IClassFixture<ConsumerPactClassFixture>
    {
        private IMockProviderService _mockProviderService;
        private string _mockProviderServiceBaseUri;

        public ConsumerPactTests(ConsumerPactClassFixture fixture)
        {
            _mockProviderService = fixture.MockProviderService;
            _mockProviderService.ClearInteractions(); //NOTE: Clears any previously registered interactions before the test is run
            _mockProviderServiceBaseUri = fixture.MockProviderServiceBaseUri;
        }

        [Fact]
        public void HeartbeatRespondsAsExpected()
        {
            // arrange
            var expectedSuccessMessage = "API is responding";
            _mockProviderService
                .UponReceiving("A heartbeat request")
                .With(new ProviderServiceRequest
                {
                    Method = HttpVerb.Get,
                    Path = "/api/heartbeat"
                })
                .WillRespondWith(new ProviderServiceResponse
                {
                    Status = 200,
                    Body = Match.Regex("API is responding", "^API is responding$"),
                    Headers = new Dictionary<string, object>
                    {
                        { "Content-Type", "text/plain; charset=utf-8" }
                    }
                });

            // act
            var result = ConsumerApiClient.Heartbeat(_mockProviderServiceBaseUri).GetAwaiter().GetResult();

            // assert
            Assert.Equal(200, (int)result.StatusCode);
        }

        [Fact]
        public void ValidLoginRespondsAsExpected()
        {
            var providerServiceRequest = new ProviderServiceRequest
            {
                Method = HttpVerb.Post,
                Path = "/api/authentication/login",
                Headers = new Dictionary<string, object>
                {
                    {"content-type", "application/json; charset=utf-8"}
                },
                Body = new
                {
                    username = "testuser",
                    password = "testpassword"
                }
            };
            var providerServiceResponse = new ProviderServiceResponse
            {
                Status = 200,
                Headers = new Dictionary<string, object>
                {
                    {"Content-Type", "application/json; charset=utf-8"}
                }
            };
            _mockProviderService
                //.Given("No setup needed")
                .UponReceiving("A valid login request")
                .With(providerServiceRequest)
                .WillRespondWith(providerServiceResponse);

            // act
            var result = ConsumerApiClient.LogInUser("testuser", "testpassword", _mockProviderServiceBaseUri).GetAwaiter().GetResult();

            // assert
            Assert.Equal(200, (int)result.StatusCode);
        }
    }
}
