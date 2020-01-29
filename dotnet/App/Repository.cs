
using System;
using System.Threading;

namespace dotnet
{
    public interface IAddressRepository
    {
        void Save(Address address);
    }

    public class AddressRepository : IAddressRepository
    {
        public void Save(Address address)
        {
            Thread.Sleep(1000);
            var rand = new Random();
            var value = rand.Next(10);

            // 10% chance this happens.
            if(value == 7) {
                throw new Exception("I might have lost the connection during this in opportune time.");
            }
        }
    }
}