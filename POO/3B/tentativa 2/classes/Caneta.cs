namespace tentativa_2.classes
{
    public class Caneta
    {
        public string? modelo { get; set; }
        public string? cor { get; set; }
        private float ponta { get; set; }
        protected int carga { get; set; }
        protected bool? tampada { get; set; }

        public void status()
        {
            Console.Clear();
            Console.WriteLine($"Modelo: {this.modelo}");
            Console.WriteLine($"Uma caneta {this.cor}");
            Console.WriteLine($"O tamanho da ponta é {this.ponta}");
            Console.WriteLine($"A carga da caneta é de {this.carga}%");
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
        public void pintar(){

        }





    }
}