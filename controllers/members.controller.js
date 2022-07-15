
var router = require('express').Router()
const axios = require('axios').default;

// top player
router.post('/lists/:list_id/members', async (req, res) => {
    try {
        const Authorization = req.get("Authorization")
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
            {
                headers: {
                    "Authorization": Authorization
                },
                timeout: 1000,
                // plenty more options can be added, refer source link above
            }
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
        const Authorization = req.get("Authorization")
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
            {
                headers: {
                    "Authorization": Authorization
                },
                timeout: 1000,
                // plenty more options can be added, refer source link above
            }
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
        const Authorization = req.get("Authorization")
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

        console.log(`https://us9.api.mailchimp.com/3.0/lists/` +
            params?.list_id +
            `/members/` +
            params?.subscriber_hash +
            `/tags`)
        const result = await axios?.get(
            `https://us9.api.mailchimp.com/3.0/lists/` +
            params?.list_id +
            `/members/` +
            params?.subscriber_hash +
            `/tags`,
            {
                headers: {
                    "Authorization": Authorization
                },
                timeout: 1000,
                // plenty more options can be added, refer source link above
            }
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