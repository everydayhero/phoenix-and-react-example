use Mix.Config

# For development, we disable any cache and enable
# debugging and code reloading.
#
# The watchers configuration can be used to run external
# watchers to your application. For example, we use it
# with brunch.io to recompile .js and .css sources.
config :webapp, Webapp.Endpoint,
  http: [port: 4000],
  debug_errors: true,
  code_reloader: true,
  check_origin: false,
  watchers: [
    node: [
      "node_modules/.bin/webpack",
      "--watch", "--colors", "--progress",
      "--config", "webpack.client.config.js",
      cd: Path.expand("../", __DIR__)
    ],
    node: [
      "node_modules/.bin/webpack",
      "--watch", "--colors", "--progress",
      "--config", "webpack.server.config.js",
      cd: Path.expand("../", __DIR__)
    ]
  ]


# Watch static and templates for browser reloading.
config :webapp, Webapp.Endpoint,
  live_reload: [
    patterns: [
      ~r{priv/static/.*(js|css|png|jpeg|jpg|gif|svg)$},
      ~r{priv/gettext/.*(po)$},
      ~r{web/views/.*(ex)$},
      ~r{web/templates/.*(eex)$}
    ]
  ]

# Do not include metadata nor timestamps in development logs
config :logger, :console, format: "[$level] $message\n"

# Set a higher stacktrace during development. Avoid configuring such
# in production as building large stacktraces may be expensive.
config :phoenix, :stacktrace_depth, 20

# Configure your database
config :webapp, Webapp.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "webapp_dev",
  hostname: "localhost",
  pool_size: 10