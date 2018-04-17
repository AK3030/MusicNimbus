# setup script here

include_recipe "ruby-ng::dev"
include_recipe "nodejs"
include_recipe "nodejs::npm"
include_recipe "postgres"
include_recipe "nginx"
include_recipe "unicorn"

apt_package 'zlib1g-dev'
apt_package 'libpq-dev'

template "nimbus_service" do
    path "/etc/init.d/nimbus"
    source "nimbus_service.erb"
    owner "root"
    group "root"
    mode "0755"
end

service "nimbus" do
  supports :restart => true, :start => true, :stop => true, :reload => true
  action [ :enable ]
end

template "#{node['nginx']['dir']}/sites-available/nimbus" do
  source 'nimbus_site.erb'
  notifies :reload, 'service[nginx]', :delayed
end

nginx_site 'nimbus' do
  action :enable
end

directory '/tmp/sockets/' do
  owner 'root'
  group 'root'
  mode '0777'
  action :create
end

unicorn_config "/opt/unicorn.rb" do
  listen ({"unix:/tmp/sockets/unicorn.sock": nil})
  working_directory node[:nimbus][:path]
  # /config/unicorn.rb
end
