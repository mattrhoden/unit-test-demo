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
            private AddressService service;

            [SetUp]
            public void Setup()
            {
                repository = Substitute.For<IAddressRepository>();
                service = new AddressService()
                {
                    Repository = repository
                };
            }

            [Test]
            public void WhenValidZipProvided_AddressSaved()
            {
                // Arrange...
                var address = new Address()
                {
                    ZipCode = "12345"
                };

                // Act/assert...
                Assert.DoesNotThrow(() => {
                    service.Save(address);
                });
            }

            [Test]
            public void WhenInvalidZipProvide_InvalidZipException()
            {
                // Arrange...
                var address = new Address()
                {
                    ZipCode = "00000"
                };

                // Act/Assert...
                Assert.Throws<InvalidZipException>(() => {
                   service.Save(address); 
                });
            }

            [Test]
            public void WhenZipProvidedIsNull_InvalidZipException()
            {
                // Arrange...
                var address = new Address()
                {
                    ZipCode = null
                };

                // Act/Assert...
                Assert.Throws<InvalidZipException>(() => {
                   service.Save(address); 
                });
            }
        }
    }
}