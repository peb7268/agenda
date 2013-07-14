require_relative '../spec_helper'

describe 'Example Suite Testing' do
	
	it 'Goes to the correct page' do		
		visit 'http://cnn.com'
		fill_in 'hdr-search-box', :with => 'some example'	
	end
end
