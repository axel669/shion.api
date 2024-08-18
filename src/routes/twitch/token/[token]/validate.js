export const $get = async (ctx) => {
    const params = ctx.req.param()
    return await fetch(
        `https://id.twitch.tv/oauth2/validate`,
        {
            headers: {
                "Authorization": `Bearer ${params.token}`,
            }
        }
    )
}
