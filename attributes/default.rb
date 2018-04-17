default['ruby-ng']['ruby_version'] = "2.4"
default['nodejs']['version'] = "6.10.1"
default['nodejs']['npm']['version'] = "5.2.0"
default['nginx']['default_site_enabled'] = false

default[:nimbus][:git_repository] = "https://github.com/AK3030/MusicNimbus"
default[:nimbus][:git_revision] = "master"
default[:nimbus][:path] = "/opt/nimbus"

default[:nimbus][:rails_env] = "production"
default[:nimbus][:log_to_stdout] = "true"

default[:nimbus][:environment] = {
  "SECRET_KEY_BASE": node[:nimbus][:secret_key_base],
  "DATABASE_URL": node[:nimbus][:database_url],
  "RAILS_ENV": node[:nimbus][:rails_env],
  "RAILS_LOG_TO_STDOUT": node[:nimbus][:log_to_stdout]
}

default[:nimbus][:start_cmd] = "unicorn -E production -c /opt/unicorn.rb"
