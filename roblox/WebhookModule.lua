local WebhookModule = {}

local HTTPService = game:GetService('HttpService')
local API_URL = "apiURL + port"

function WebhookModule:Send( Content )
	Content = HTTPService:JSONEncode( Content )	
	
	local Post = pcall(function()
		HTTPService:PostAsync(API_URL .. '/discord/webhook', Content)
	end)
		
	if Post then
		return "✅ Webhook has posted successfully"
	else
		return ("❌ Webhook has failed to post " .. Content)
	end
end

return WebhookModule
