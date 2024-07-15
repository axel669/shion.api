import { $get as validate } from "./validate"
export const $get = async (ctx) => {
    const params = ctx.req.param()
    const valid = await validate(ctx)
    if (valid.ok === false) {
        return valid
    }
    const token = await valid.json()
    return await fetch(
        `https://id.twitch.tv/oauth2/revoke`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                "token": params.token,
                "client_id": token.client_id,
            }).toString()
        }
    )
}
