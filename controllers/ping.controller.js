
var router = require('express').Router()
const axios = require('axios').default;

// top player
router.get('/ping', async (req, res) => {
    try {
        const Authorization = req.get("Authorization")

        const result = await axios?.get(
            `https://us9.api.mailchimp.com/3.0/ping`,
            {
                headers: {
                    "Authorization": Authorization
                },
                timeout: 1000,
            }
        ).catch(function (error) {
            console.log({
                message: "Oh no! Error in ping :O",
            })
        })

        if (!result?.data) {
            return res.status(400).json({
                message: "Oh no! Error in ping :O",
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