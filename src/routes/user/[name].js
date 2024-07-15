export const $get = async (ctx) => {
    const env = ctx.env
    const params = ctx.req.param()
    const query = new URLSearchParams({
        login: params.name
    })
    const res = await fetch(
        `https://api.twitch.tv/helix/users?${query.toString()}`,
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
