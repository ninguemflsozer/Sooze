INSERT INTO Clientes (nome, telefone, tipo) VALUES
('Mariana Rocha', '21987654321', 'PF'),
('Gabriel Fernandes', '11912345678', 'PF'),
('InovaTI Soluções', '1133344556', 'PJ'),
('Carla Menezes', '21911112222', 'PF');

INSERT INTO Produto (nome, descricao, categoria, preco, estoque) VALUES
('Teclado Mecânico Redragon', 'RGB, switch blue, ABNT2', 'Periférico', 289.90, 40),
('HD Externo 2TB Seagate', 'USB 3.0 portátil', 'Armazenamento', 459.00, 25),
('Placa de Vídeo RTX 4060', 'NVIDIA, 8GB GDDR6', 'Hardware', 2499.99, 8);

INSERT INTO Pedidos (Clientes_idClientes, data_pedido, status) VALUES
(3, '2025-07-02', 'Pago'),
(4, '2025-07-03', 'Cancelado'),
(5, '2025-07-03', 'Pago'),
(6, '2025-07-04', 'Pendente');

INSERT INTO Item_pedido (Pedidos_idPedidos, Produto_idProduto, quantidade, preco_unitario) VALUES
(3, 4, 1, 289.90), -- Mariana comprou 1 teclado
(3, 5, 2, 459.00), -- Mariana comprou 2 HDs
(4, 2, 1, 499.00), -- Gabriel tentou comprar 1 mouse (pedido cancelado)
(5, 6, 1, 2499.99), -- InovaTI comprou uma RTX 4060
(5, 1, 1, 7899.90), -- InovaTI comprou 1 notebook
(6, 3, 3, 1299.99); -- Carla vai comprar 3 monitores

INSERT INTO Pagamento (Pedidos_idPedidos, forma_pagamento, valor, data_pagamento) VALUES
(3, 'Pix', 1207.90, '2025-07-02'),
(5, 'Boleto', 10399.89, '2025-07-03');