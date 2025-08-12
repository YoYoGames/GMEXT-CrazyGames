
function show_message_async_ext(text){
	if(is_struct(text) or is_array(text))
		text = json_stringify(text)
		
	if(string_length(text)>25)
		text = string_copy(text,1,25) + "..."
	
	show_message_async(text)
	show_debug_message(text)
}
