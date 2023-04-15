const knex = require('../models/knex');

exports.helloWorld = (req, res, next) => {
    res.send('<h1>Hello World!</h1>');
};

exports.addProfile = (async (req, res, next) => {
    try{
        console.log('add profile');
        const body = req.body;
        console.log(req);

        let regis = await knex('profile').insert({
            name: body.name,
            birthdt: new Date(body.birthdt),
            status: body.status
        }).then( insertedId => {
            return insertedId
        })

        return res.status(201).send({
            message: regis
        });
    }catch (error){
        return res.status(500).send({
            error : error
        })
    }
});

exports.addProfile = (async (req, res, next) => {
    try{
        console.log('add profile');
        const body = req.body;
        console.log(req);

        let regis = await knex('profile').insert({
            name: body.name,
            birthdt: new Date(body.birthdt),
            status: body.status
        }).then( insertedId => {
            return insertedId
        })

        return res.status(201).send({
            message: regis
        });
    }catch (error){
        return res.status(500).send({
            error : error
        })
    }
});

exports.deleteUserById =  (async (req, res, next) => {
    try {
        const ProfileId = req.body.Id;
        await knex('profile').where({ id: ProfileId }).del();

        return res.status(201).send({
            message: (`profile with ID ${ProfileId} has been deleted successfully.`)
        });
    } catch (error) {
        return res.status(500).send({
            error : error
        })
    }
});

exports.getProfileById = (async (req, res, next) => {
    try {
        const ProfileId = req.body.Id;
        const profile = await knex('profile').where({ id: ProfileId }).select('*').first();

        return res.status(200).send({
            message: profile ? profile : null
        });
    } catch (error) {
        return res.status(500).send({
            error : error
        })
    }
});

// exports.editProfile = (async (req, res, next) => {
//     try {
//         const body = req.body;
        
//         await knex('profile').where({ id: body.id }).update({
//             name: body.name,
//             birthdt: new Date(body.birthdt),
//             status: body.status
//         });

//         return res.status(201).send({
//             message: (`profile with ID ${ProfileId} has been edited successfully.`)
//         });
//     } catch (error) {
//         return res.status(500).send({
//             error : error
//         })
//     }
// });