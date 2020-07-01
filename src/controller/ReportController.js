const { Op } = require('sequelize');
const User = require('../model/User');

module.exports = {
  async show(req, res) {
    // Encontrar todos os usuários que tem e-mail que termina com @rocketseat.com.br
    // Desses usuários eu quero todos que moram na rua "Rua Guilherme Gembala"
    // Desses usuários eu quero buscar as tecnologias que começam com React
    const users = await User.findAll({
      attributes: [ 'name', 'email' ],
      where: {
        email: { 
          [Op.iLike]: '%@rocketseat.com.br'
        }
      },
      include: [
        { // endereço
          association: 'addresses', 
          where: { 
            street: "Rua Guilherme Gembala" 
          } 
        },
        { // tecnologia
          association: 'techs',
          required: false,
          where: {
            name: {
              [Op.iLike]: "React%",
            }
          },
        },
      ],
    });

    return res.json(users);
  }
}