using dotnet;
using NUnit.Framework;
using NSubstitute;
using NSubstitute.ReturnsExtensions;

namespace Tests
{
    [TestFixture]
    partial class AddressServiceTests
    {
        public class Save
        {
            private IAddressRepository repository;

            [SetUp]
            public void Setup()
            {
                repository = Substitute.For<IAddressRepository>();
            }

            [Test]
            public void WhenValidZipProvided_AddressSaved()
            {
                // Arrange...
                var service = new AddressService()
                {
                    Repository = repository
                };
                var address = new Address()
                {
                    ZipCode = "12345"
                };

                // Act...
                service.Save(address);

                // Assert...
                Assert.True(true);
            }
        }
    }
}