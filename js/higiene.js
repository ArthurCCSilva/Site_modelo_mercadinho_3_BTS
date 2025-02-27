const listaProdutos = [
    { 
        id: 3,
        name: "Shampoo - Seda", 
        description: "Shampoo hidratante para cabelos sedosos e brilhantes.", 
        valor: "R$ 12,99", 
        price: 12.99, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 9,
        name: "Escova de Unhas", 
        description: "Escova de unhas para limpeza profunda.", 
        valor: "R$ 6,50", 
        price: 6.50,  
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 24,
        name: "Sabonete - Flora", 
        description: "Sabonete hidratante para pele macia e limpa.", 
        valor: "R$ 5,69", 
        price: 5.69 , 
        category: "higiene", 
        image: "img/imgproduto196.jpg" 
    },
    { 
        id: 25,
        name: "Detergente - Ypê", 
        description: "Detergente eficiente  para limpeza de louças e utensílios.", 
        valor: "R$ 1,99", 
        price: 1.99, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
         id: 26,
        name: "Papel Higiênico - Fofinho", 
        description: "Papel higiênico macio e absorvente para uso diário.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 27,
        name: "Creme Dental - Colgate", 
        description: "Creme den tal para higiene bucal completa.", 
        valor: "R$ 6,00", 
        price: 6.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
         id: 28,
        name: "Desodorante - Rexona", 
        description: "Desodorante antitranspirante para proteção duradoura.", 
        valor: "R$ 12,00", 
        price: 12.00, 
         category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 29,
        name: "Absorvente - Intimus", 
        description: "Absorvente feminino  para maior conforto no dia a dia.", 
        valor: "R$ 8,00", 
        price: 8.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
         id: 30,
        name: "Sabonete Líquido - Dove", 
        description: "Sabonete líquido hidratante para pele macia e suave.", 
        valor: "R$ 15,00", 
        price: 15.00,  
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 31,
        name: "Escova de Dentes - Oral-B", 
        description: "Escova de  dentes com cerdas macias para uma limpeza profunda.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
     },
    { 
        id: 32,
        name: "Fio Dental - Johnson", 
        description: "Fio dental para limpeza interdental eficaz.", 
        valor: "R$ 5,00", 
        price: 5.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 33,
        name: "Algodão - Hidrófilo", 
        description: "Algodão hid rófilo para cuidados pessoais e limpeza.", 
        valor: "R$ 7,00", 
        price: 7.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
         id: 34,
        name: "Lenços Umedecidos - Baby", 
        description: "Lenços umedecidos para bebês, suaves e seguros.", 
        valor: "R$ 12,00", 
        price: 12.00 , 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 35,
        name: "Protetor Solar - Nivea", 
        description: "Protetor so lar FPS 50 para proteção contra raios UV.", 
        valor: "R$ 30,00", 
        price: 30.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
     { 
        id: 36,
        name: "Lâmina de Barbear - Gillette", 
        description: "Lâmina de barbear para um barbear perfeito e confortável.", 
        valor: "R$ 18,00", 
         price: 18.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 37,
        name: "Condicionador - Pantene", 
        description: "Condicionador para cabelos sedosos e fáceis de pentear.", 
        valor: "R$ 14,00", 
        price: 14.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 38,
        name: "Esponja de Banho - Lux", 
        description: "Esponja de banho para uma limpeza eficaz e relaxante.", 
        valor: "R$ 5 ,00", 
        price: 5.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 39,
        name: "Cotonete - Johnson", 
        description: "Cotonetes para limpeza dos ouvidos e cuidados pessoais.", 
        valor: "R$ 6,00", 
        price: 6.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 69,
        name: "Álcool Gel - 70%", 
        description: "Álcool gel antisséptico para higienização das mãos.", 
        valor: "R$ 8,00", 
        price: 8.00, 
        category: "higiene",  
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 70,
        name: "Sabonete Íntimo - Femfresh", 
        description: "Sabonete íntimo para cuidados diários. ", 
        valor: "R$ 15,00", 
        price: 15.00, 
        category: "higiene", 
        image: "img/imgproduto196.jpg"    
    },
    { 
        id: 71,
        name: "Desinfe tante - Pinho", 
        description: "Desinfetante com aroma de pinho para limpeza geral.", 
        valor: "R$ 10,00", 
        price: 10.00, 
        category: "higiene", 
         image: "img/imgproduto196.jpg"    
    }
];