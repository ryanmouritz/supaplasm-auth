import { createServerClient, serialize } from '@supabase/ssr'

function createClient(req, res) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return req.cookies[name];
        },
        set(name, value, options) {
          res.setHeader('Set-Cookie', serialize(name, value, options));
        },
        remove(name, options) {
          res.setHeader('Set-Cookie', serialize(name, '', options));
        },
      },
    }
  );

  return supabase;
}

module.exports = createClient;