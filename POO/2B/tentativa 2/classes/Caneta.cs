namespace tentativa_2.classes
{
    public class Caneta
    {
        public string? modelo { get; set; }
        public string? cor { get; set; }
        public float ponta { get; set; }
        public int carga { get; set; }
        public bool? tampada { get; set; }

        public void status()
        {
            Console.Clear();
            Console.WriteLine($"Uma caneta {this.cor}");
            Console.WriteLine($"Está tampada? {this.tampada}");
        }

        public void rabiscar()
        {
            if (this.tampada == true)
            {
                Console.WriteLine($"Erro não posso rabiscar!");

            }
            else
            {
                Console.WriteLine($"Rabiscando...");

            }
            {

            }
        }
        public void tampar()
        {
            this.tampada = true;
        }
        public void destampar()
        {
            this.tampada = false;
        }





    }
}