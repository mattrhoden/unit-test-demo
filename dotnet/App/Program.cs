using System;
using Autofac;

namespace dotnet
{
    public class Program
    {
        public static IContainer Container { get; set; }

        static void Main(string[] args)
        {
            InitializeProgram();

            Console.WriteLine("Hi please give me your address.");
            Console.Write("Address Line 1: ");
            var addressLine1 = Console.ReadLine();
            Console.Write("Address Line 2: ");
            var addressLine2 = Console.ReadLine();
            Console.Write("State: ");
            var state = Console.ReadLine();
            Console.Write("Zip: ");
            var zip = Console.ReadLine();

            var address = new Address
            {
                Line1 = addressLine1,
                Line2 = addressLine2,
                State = state,
                ZipCode = zip
            };

            var service = Container.Resolve<IAddressService>();
            service.Save(address);

            Console.WriteLine("Saved, we'll drop by soon :) You may exit the app (press any button).");
            Console.ReadLine();
        }

        static void InitializeProgram()
        {
            var builder = new ContainerBuilder();
            builder.RegisterType<AddressService>().As<IAddressService>().PropertiesAutowired();
            builder.RegisterType<AddressRepository>().As<IAddressRepository>().PropertiesAutowired();
            Container = builder.Build();
        }
    }
}
