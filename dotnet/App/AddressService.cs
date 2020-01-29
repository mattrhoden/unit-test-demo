using System;

namespace dotnet
{
    public interface IAddressService
    {
        void Save(Address address);

        Address WhiteHouse();
    }

    public class AddressService : IAddressService
    {
        public IAddressRepository Repository { get; set; }

        public void Save(Address address)
        {
            if(!ZipIsValid(address))
            {
                throw new InvalidZipException("The zip code is not valid.");
            }

            Repository.Save(address);
        }

        public Address WhiteHouse()
        {
            return new Address()
            {
                Line1 = "1600 Pennsylvania Ave NW",
                City = "Washington",
                State = "DC",
                ZipCode = "20500"
            };
        }

        private bool ZipIsValid(Address address)
        {
            int number = 0;

            if(int.TryParse(address.ZipCode, out number))
            {
                return number > 10000;
            }

            return false;
        }
    }
}