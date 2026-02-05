---
sidebar_position: 5
---

# Document Processing

Process invoices, forms, receipts, and other documents to extract structured data.

## Purpose

Transform unstructured documents (PDFs, images) into structured, usable data (tables, spreadsheets).

## Who Can Use This

✅ All users

---

## What is Document Processing?

**Before NA:** Manually typing data from invoices into Excel  
**With NA:** Upload invoices, get data automatically extracted to a table

**Document types NA can process:**
- 📄 Invoices and receipts
- 📋 Forms and applications
- 📝 Resumes/CVs
- 📊 Reports and statements
- 🖼️ Scanned documents

---

## Common Use Cases

### 1. Invoice Processing

**Upload:** Invoice PDFs or images

**Ask NA:**
```
"Extract invoice number, date, vendor name, total amount,  
 and due date from these invoices into a table"
```

**Result:** Table with all data ready to copy to Excel

[Screenshot: Invoice data extracted into table]

---

### 2. Receipt Processing (Expense Reports)

**Upload:** Receipt photos or PDFs

**Ask NA:**
```
"Extract merchant name, date, amount, and payment method  
 from these receipts"
```

**Result:** Expense data ready for reimbursement form

---

### 3. Resume/CV Screening

**Upload:** Candidate resumes

**Ask NA:**
```
"For each resume, extract:  
 - Name  
 - Education (degree and school)  
 - Years of experience  
 - Key technical skills  
 - Present in a table for comparison"
```

**Result:** Candidate comparison table

---

### 4. Form Data Extraction

**Upload:** Scanned application forms

**Ask NA:**
```
"Extract the following fields from these application forms:  
 Name, Address, Phone, Email, Date Signed"
```

**Result:** Structured data for database entry

---

## Step-by-Step: Processing a Document

**1. Upload Your Document**
- Click upload button or drag-and-drop
- See [Uploading Documents](uploading-documents.md)

**2. Specify What to Extract**
- Be specific about which fields you need
- Specify output format (table, list, etc.)

**3. Review the Results**
- Check extraction accuracy
- Ask for corrections if needed

**4. Export or Copy**
- Copy table to Excel/Google Sheets
- Or export as.xlsx file


---

## Advanced Processing

### Extract and Calculate

```
"Extract all line items from this invoice and calculate  
 the subtotal, tax, and total"
```

### Compare Documents

```
"Compare these two contracts and highlight the differences  
 in pricing and terms"
```

### Batch Processing

```
[Upload 50 invoices]

"Process all invoices and create a summary table showing:  
 - Total invoices: count  
 - Total amount: sum  
 - By vendor: breakdown"
```

---

## Quality Tips

### For Best Results:

✅ **Clear images/scans** - Not blurry or dark  
✅ **Standard documents** - Common formats NA recognizes  
✅ **Specify exact fields** - Tell NA exactly what you need  
✅ **Check outputs** - Always verify extracted data  

### If Extraction Fails:

1. ✓ Re-scan document more clearly
2. ✓ Try a different file format
3. ✓ Manually provide context about document structure
4. ✓ Process one page at a time

---

## Expected Result

✅ Data extracted from documents automatically  
✅ Structured output (tables, lists)  
✅ Time saved vs. manual data entry  
✅ Reduced errors in data capture  

---

## Next Steps

- [Export your results](exporting-results.md)
- [Draft content](content-drafting.md)
- [View conversation history](../user-manual/chat-ui)

