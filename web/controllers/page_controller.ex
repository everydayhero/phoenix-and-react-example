defmodule Webapp.PageController do
  use Webapp.Web, :controller

  def index(conn, _params) do
    {body, 0} = System.cmd "node", ["./priv/react/server.js", "/"], env: [{"NODE_ENV", "production"}]

    conn
    |> put_resp_content_type("text/html")
    |> send_resp(200, body)
  end
end
