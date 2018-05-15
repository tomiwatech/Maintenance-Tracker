let dataStore = [];
class userClass {

    create(req, res, next) {
        console.log(req.body)
        dataStore.push(req.body);
        return res.status(201).json({
            'statusCode': '00',
            'statusMessage': 'New request created successfully'
        })
    }


    deleteOne(req, res, next) {
        let foundAt = this.find();
        if (foundAt > -1) {
            dataStore.splice(foundAt, 1);
            dataStore.pop()
            return true;
        }

    }

    findById(req, res, next) {
        let id = req.params.id;
        console.log("id " + id);
        for (let i = 0; i < dataStore.length; ++i) {
            if (dataStore[i].id == id) {
                return res.status(200).json({
                    'statusCode': '00',
                    'statusMessage': 'User found',
                    'data': dataStore[i]
                })
            }
        }

        return res.status(404).json({
            'statusCode': '04',
            'statusMessage': 'User not found'
        })
    }


    getAll(req, res, next) {
        console.log(dataStore)
        return res.status(200).json({
            'statusCode': '00',
            'statusMessage': 'Successfully fetched all users requests',
            'data': dataStore
        });
    }


    deleteAll(req, res, next) {
        dataStore.length = 0
        return res.status(200).json({
            'statusCode': '00',
            'statusMessage': 'Data Source Emptied Successfully',
            'data': dataStore
        });
    }


    updateOne(req, res, next) {

        function find(id){
            console.log('cLalled me')
            for (let i = 0; i < dataStore.length; ++i) {
                if (dataStore[i].id == id) {
                    return i;
                }
            }

            return -1;
        }

        const { id, name, model, desciption, defect } = req.body;
        let foundOne = find(id);
        if (foundOne > -1) {
            for (let i = 0; i < dataStore.length; ++i) {
                if (dataStore[i].id == id) {
                    dataStore[i].id = id;
                    dataStore[i].name = name;
                    dataStore[i].model = model;
                    dataStore[i].desciption = desciption;
                    dataStore[i].defect = defect;

                    return res.status(200).json({
                        'statusCode': '00',
                        'statusMessage': 'Updated',
                        'data': dataStore[i]
                    })
                }
            }
        }

        return res.status(400).json({
            'statusCode': '00',
            'statusMessage': 'User with id not found'
        })

    }

}

const userController = new userClass();

export default userController;