class HomeController < ApplicationController
  def index
  end

  def download
    send_file  "public/jouhri_oualid.pdf", :disposition => 'attachment'
  end

end
