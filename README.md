# Projeto Angular Cards Dinâmicos
Este é um projeto simples desenvolvido em Angular para demonstrar o uso de property binding e componentização na criação de cards dinâmicos.

## Descrição do Projeto
O projeto consiste em criar dois cards dinâmicos que exibem informações específicas. Cada card é um componente Angular separado, permitindo uma abordagem modular e reutilizável.

## Tecnologias Utilizadas
- Angular: Framework JavaScript para construção de aplicativos web.
- TypeScript: Linguagem de programação superset do JavaScript, utilizada para escrever código Angular.
- HTML/SCSS: Linguagens de marcação e estilo para estruturação e design da interface do usuário.

## Instalação
Antes de iniciar, verifique se você possui o Node.js (versão 20 ou superior) e o Angular CLI (versão 17 ou superior) instalados em sua máquina.

### Clone este repositório:
```bash
git clone https://github.com/theotrin/angular-dinamic-cards.git
```
Na pasta raiz do projeto basta digitar:
```bash
ng serve
```
E entrar no servidor local(geralmente é http://localhost:4200/) em seu navegador de prefêrencia.

## Exemplo visual dos cards: 
![image](https://github.com/theotrin/angular-dinamic-cards/assets/102327842/d58fd823-df67-448c-a18e-fce26d627e56)

## Componentes
Card Component.
<br/>
O CardComponent exibe informações dinâmicas em um card.

### Propriedades de Entrada
- text: Texto do card.
- price: Preço exibido no card.
- color: Cor do card tendo como template as cores Laranja e Roxo.

### Exemplo de Uso
```HTML
<app-card
[text]="'Completo'"
[price]="250"
[color]="'purple'" <!-- podendo escolher entre 'purple' e 'orange' exemplos visuais a cima... -->
>
</app-card>
```

# O que aprendi / o que esse projeto pode ajudar no mundo real?

De forma resumida foi feito apenas um card que pode ser reutilizado usando property bind para mudar a cor dele com palavras reservadas no HTML: (orange e purple), o texto e botões tambem são customizáveis dentro do componente no projeto podendo de forma muito simples ser reutilizado em um site inteiro!.
<br/> <br/>
Este projeto demonstra como criar cards dinâmicos utilizando property binding e componentização no Angular. Sinta-se à vontade para explorar e modificar o código-fonte de acordo com suas necessidades.

### Este projeto simples de cards dinâmicos pode ser útil em várias situações do mundo real. Aqui estão algumas maneiras de como ele poderia ser aplicado:

- Dashboard Administrativo: Em um painel administrativo, os cards dinâmicos podem exibir informações como estatísticas de usuários, vendas, atividades recentes etc.
Feed de Notícias Personalizado: Em um aplicativo de notícias, os cards dinâmicos podem ser usados para exibir artigos, vídeos ou atualizações personalizadas com base nos interesses do usuário.
- Catálogo de Produtos: Em um site de comércio eletrônico, os cards dinâmicos podem ser usados para mostrar produtos em destaque, promoções ou recomendações personalizadas com base no histórico de compras do usuário.
- Plataforma de Aprendizado Online: Em uma plataforma de aprendizado, os cards dinâmicos podem ser usados para exibir cursos recomendados, módulos recentemente adicionados ou atividades de aprendizado personalizadas.
- Agenda de Eventos: Em um aplicativo de eventos, os cards dinâmicos podem ser usados para mostrar detalhes de eventos próximos, palestrantes, programação e opções de registro.
Sistema de Gerenciamento de Tarefas: Em uma ferramenta de gerenciamento de tarefas, os cards dinâmicos podem exibir informações sobre as tarefas atribuídas, prazos de conclusão e prioridades.
