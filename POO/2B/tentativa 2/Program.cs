using tentativa_2.classes;

Caneta nc = new Caneta();
nc.cor = "azul";
nc.ponta = 0.5f;
nc.tampada = false;

nc.tampar();
nc.status();
nc.rabiscar();

Caneta nc2 = new Caneta();

nc2.cor = "preta";
nc2.destampar();
nc2.rabiscar();