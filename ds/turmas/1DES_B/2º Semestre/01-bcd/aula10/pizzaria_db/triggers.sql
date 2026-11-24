-- Gatilho que atualiza o valor do pedido após a inserção de um item.
DROP TRIGGER IF EXISTS trg_atualiza_valor_pedido;
DELIMITER //
CREATE TRIGGER trg_atualiza_valor_pedido
AFTER INSERT ON itens_pedido
FOR EACH ROW
BEGIN
    UPDATE pedidos
    SET valor = (
        SELECT COALESCE(SUM(valor * quantidade), 0)
        FROM itens_pedido
        WHERE pedido_id = NEW.pedido_id
    )
    WHERE pedido_id = NEW.pedido_id;
END //
DELIMITER ;
SHOW TRIGGERS;

-- Inserindo mais um ítem no ultimo pedido para testar
INSERT INTO itens_pedido VALUES (last_insert_id(), 2, 1, 32.93);
SELECT * FROM pedidos ORDER BY pedido_id DESC LIMIT 1;