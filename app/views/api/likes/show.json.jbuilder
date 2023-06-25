json.like do
    json.extract! @like,:id,:user_id,:likeable_id,:likeable_type
end

# json.post do  
#     json.extract!
# end