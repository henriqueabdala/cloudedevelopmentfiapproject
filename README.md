# AWS (BeanStalk + DBaaS MySql + CodePipeline)

Aplicação simples de CRUD para rodando no beanstalk fazendo uso do RDS para banco de dados relacional mysql.
Obs: O codepipeline está funcionando, porém precisa lançar alteração na esteira da AWS, por algum motivo ao dar o commit não está startando de forma automática a pipe. Acreditamos que seja pelo motivo de selecionar o provider github V1, que não é mais indicado pela AWS, porém, a nossa conta não permite selecionar outro provider.

## Executar o projeto 
 * Para uso da aplicação usar a URL http://awsclouddevelopmentfiapf339699h338858i339587.us-east-1.elasticbeanstalk.com/

Exemplos de chamada postman para teste:
```
 GET - http://awsclouddevelopmentfiapf339699h338858i339587.us-east-1.elasticbeanstalk.com/item
 
 GET by ID - http://awsclouddevelopmentfiapf339699h338858i339587.us-east-1.elasticbeanstalk.com/item/1
 
 POST - http://awsclouddevelopmentfiapf339699h338858i339587.us-east-1.elasticbeanstalk.com/item
        {
          "item_name": "CD - ROOM",
          "item_desc": "CD ~e muito bom",
          "item_price": 30
        }
   
 DELETE - http://awsclouddevelopmentfiapf339699h338858i339587.us-east-1.elasticbeanstalk.com/item/4
```

---------------------------------------

## Colaboradores
| Colaborador | Github | Telefone |
| ------ | ------ | ------ |
| Fernando Gatti | [fernandodgatti][Gatti] | 11 953448553 |
| Henrique Abdala | [henriqueabdala][Abdala] | 11 975581678 |
| Iller Boromello | [boromello][Boromello] | 11 984559040 |

Professor Jose Castillo Lema

Licença
----
FIAP


   [Gatti]: <https://github.com/fernandodgatti>
   [Abdala]: <https://github.com/henriqueabdala>
   [Boromello]: <https://github.com/Boromello>
