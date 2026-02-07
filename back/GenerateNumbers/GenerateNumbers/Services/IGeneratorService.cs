namespace GenerateNumbers.Services
{
    public interface IGeneratorService<out T>
    {
        T Generate();
    }
}