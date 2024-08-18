export const $get = async (ctx) => {
    const env = ctx.env
    const params = ctx.req.param()
    const query = new URLSearchParams({
        broadcaster_id: params.id
    })
    const res = await fetch(
        `https://api.twitch.tv/helix/chat/emotes?${query.toString()}`,
        {
            headers: {
                "Authorization": `Bearer ${env.app_token}`,
                "Client-Id": env.client_id
            }
        }
    )
    if (res.ok === false) {
        return res
    }
    const { data } = await res.json()
    return Response.json(data)
}
