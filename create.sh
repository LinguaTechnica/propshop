aws s3api create-bucket --bucket rentalated --region us-east-1
aws s3 website s3://rentalated --index-document index.html --error-document error.html
aws s3api put-bucket-policy --bucket rentalated --policy file://bucket-policy.json