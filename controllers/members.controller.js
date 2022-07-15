
var router = require('express').Router()
const axios = require('axios').default;


const header_data = {
    headers: {
        "Authorization": "Bearer 3f262026e4dadefc517e9c4607bd15f8-us9"
    },
    timeout: 1000,
    // plenty more options can be added, refer source link above
}


// top player
router.post('/lists/:list_id/members', async (req, res) => {
    try {
        var body = req.body
        var params = req.params

        if (!params?.list_id) {
            return res.status(400).json({
                message: "Oh no! can't find your list_id :O",
            })
        }

        const result = await axios?.post(
            `https://us9.api.mailchimp.com/3.0/lists/` + params?.list_id + `/members`,
            body,
            header_data
        ).catch(function (error) {
            return res.status(400).json({
                message: "Oh no! Error in adding member :O",
            })
        })

        if (!result?.data) {
            return res.status(400).json({
                message: "Oh no! Error in adding member :O",
            })
        } else {
            return res.status(200).json(result?.data)
        }
    } catch (error) {
        return res.status(400).json({
            type: "Server Error",
            error: error
        })
    }
})

router.post('/lists/:list_id/members/:subscriber_hash/tags', async (req, res) => {
    try {
        var body = req.body
        var params = req.params

        if (!params?.list_id) {
            return res.status(400).json({
                message: "Oh no! can't find your list_id :O",
            })
        }

        if (!params?.subscriber_hash) {
            return res.status(400).json({
                message: "Oh no! can't find your subscriber_hash :O",
            })
        }

        const result = await axios?.post(
            `https://us9.api.mailchimp.com/3.0/lists/` +
            params?.list_id +
            `/members/` +
            params?.subscriber_hash +
            `/tags`,
            body,
            header_data
        ).catch(function (error) {
            return res.status(400).json({
                message: "Oh no! Error in adding tags :O",
            })
        })


        return res.status(200).json()
    } catch (error) {
        return res.status(400).json({
            type: "Server Error",
            error: error
        })
    }
})
router.get('/lists/:list_id/members/:subscriber_hash/tags', async (req, res) => {
    try {
        var body = req.body
        var params = req.params

        if (!params?.list_id) {
            return res.status(400).json({
                message: "Oh no! can't find your list_id :O",
            })
        }

        if (!params?.subscriber_hash) {
            return res.status(400).json({
                message: "Oh no! can't find your subscriber_hash :O",
            })
        }

        const result = await axios?.get(
            `https://us9.api.mailchimp.com/3.0/lists/` +
            params?.list_id +
            `/members/` +
            params?.subscriber_hash +
            `/tags`,
            header_data
        ).catch(function (error) {
            return res.status(400).json({
                message: "Oh no! Error in adding tags :O",
            })
        })

        if (!result?.data) {
            return res.status(400).json({
                message: "Oh no! Member does not exists :O",
            })
        } else {
            return res.status(200).json(result?.data)
        }
    } catch (error) {
        return res.status(400).json({
            type: "Server Error",
            error: error
        })
    }
})

module.exports = router;