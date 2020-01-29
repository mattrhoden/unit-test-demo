using System;

namespace dotnet
{
    public class InvalidZipException : Exception
    {
        public InvalidZipException() : base()
        {
        }

        public InvalidZipException(string message) : base(message)
        {
        }

        public InvalidZipException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}