namespace tentativa_2.classes
{
    public class Caneta
    {
        public string? modelo { get; set; }
        public string? cor { get; set; }
        private float ponta { get; set; }
        protected int carga { get; set; }
        protected bool? tampada { get; set; }

public string? getModelo(){
    return this.modelo;
}

public void setModelo(string m){
this.modelo = m;
}

public float? getPonta(){
return this.ponta;
}

public void setPonta(float p){
    this.ponta = p;
}

        public void status()
        {
            Console.Clear();
            Console.WriteLine($"Modelo: {this.getModelo()}");
            
            Console.WriteLine($"O tamanho da ponta é {this.getPonta()}");
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