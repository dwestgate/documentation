require 'open3'
require_relative '_utils.rb'


module Jekyll
  class BrowserifyConverter < Converter
    safe true
    priority :low

    def matches(ext)
      ext =~ /^\.js$/i
    end

    def output_ext(ext)
      ".js"
    end

    def convert(content)
      BranchUtils.instance.bundle(content)
    end
  end
end
