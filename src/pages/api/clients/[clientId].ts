import type { APIRoute } from 'astro'
export const prerender = false

export const GET: APIRoute = async ({ request, params }) => {
  const { clientId } = params

  const body = {
    method: 'GET',
    clientId,
  }

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
export const PATCH: APIRoute = async ({ request, params }) => {
  const { clientId } = params

  const body = {
    method: 'PATCH',
    clientId,
  }

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const DELETE: APIRoute = async ({ request, params }) => {
  const { clientId } = params

  const body = {
    method: 'DELETE',
    clientId,
  }

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
